const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Create 'uploads' folder if not exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// File Upload Setup
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null, `${timestamp}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

const saveToExcel = (data, fileName) => {
    const filePath = path.join(uploadDir, fileName);
    let workbook;

    try {
        // Try reading the existing workbook
        workbook = xlsx.readFile(filePath);
    } catch (err) {
        workbook = xlsx.utils.book_new();
    }

    const sheetName = 'Registrations';
    let worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        worksheet = xlsx.utils.json_to_sheet([]);
        xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    const updatedData = xlsx.utils.sheet_to_json(worksheet);
    updatedData.push(data);

    const newWorksheet = xlsx.utils.json_to_sheet(updatedData);
    workbook.Sheets[sheetName] = newWorksheet;

    // File writing with error handling
    try {
        xlsx.writeFile(workbook, filePath);
    } finally {
        if (fs.existsSync(filePath)) {
            fs.closeSync(fs.openSync(filePath, 'r'));  // Ensures file closure
        }
    }
};

// Route for Viewing Uploaded Files
app.get('/uploads/:filename', (req, res) => {
    const filePath = path.join(uploadDir, req.params.filename);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
});

// Registration Routes for Individual Excel Sheets
app.post('/register-debug', upload.single('proof'), (req, res) => {
    const data = { 
        ...req.body, 
        proof: req.file ? req.file.filename : 'No file uploaded',
        proofPath: req.file ? `/uploads/${req.file.filename}` : 'No file uploaded',
        timestamp: new Date().toLocaleString()
    };

    saveToExcel(data, 'debug.xlsx');
    res.status(200).json({
        message: 'Debug registration successful!',
        fileLink: data.proofPath
    });
});

app.post('/register-hackathon', upload.single('proof'), (req, res) => {
    const data = { 
        ...req.body, 
        proof: req.file ? req.file.filename : 'No file uploaded',
        proofPath: req.file ? `/uploads/${req.file.filename}` : 'No file uploaded',
        timestamp: new Date().toLocaleString()
    };

    saveToExcel(data, 'hackathon.xlsx');
    res.status(200).json({
        message: 'Hackathon registration successful!',
        fileLink: data.proofPath
    });
});

app.post('/register-genai', upload.single('proof'), (req, res) => {
    const data = { 
        ...req.body, 
        proof: req.file ? req.file.filename : 'No file uploaded',
        proofPath: req.file ? `/uploads/${req.file.filename}` : 'No file uploaded',
        timestamp: new Date().toLocaleString()
    };

    saveToExcel(data, 'genai.xlsx');
    res.status(200).json({
        message: 'GenAI registration successful!',
        fileLink: data.proofPath
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
