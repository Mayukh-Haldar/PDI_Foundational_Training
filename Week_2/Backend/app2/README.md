# App2: File Organizer

## Overview

An automated file organization utility that scans a directory, categorizes files by their extensions, and automatically creates subdirectories to organize files by type. This Node.js application demonstrates practical file system operations using async/await and CommonJS modules.

---

## Purpose

Learn and practice:

* File system operations using `fs.promises`
* Async/Await for non-blocking I/O
* Path manipulation with the `path` module
* Using the OS module
* Error handling in Node.js
* Directory and file management

---

## Features

✓ Automatically creates folders based on file extensions
✓ Moves files into extension-based folders
✓ Handles files with no extension (moves to `others/`)
✓ Skips existing directories
✓ Uses async/await for efficient execution
✓ Includes error handling
✓ Logs progress for each file

---

## Technology Stack

| Component     | Technology            |
| ------------- | --------------------- |
| Runtime       | Node.js               |
| Module System | CommonJS              |
| APIs Used     | fs.promises, path, os |
| Async Model   | async/await           |

---

## Installation

```bash
cd app2
# No dependencies required (uses only Node.js built-in modules)
```

---

## Usage

### Run the Program

```bash
node app.js
```

---

### Configure Target Folder

In your code, you specify:

```javascript
organizeFolder('my_downloads');
```

Replace `'my_downloads'` with the folder name you want to organize.

Example:

```javascript
organizeFolder('Downloads');
organizeFolder('assets');
organizeFolder('archive');
```

The folder must exist inside the project directory.

---

## What the Program Does

1. Reads all items in the specified folder
2. Checks whether each item is a file or directory
3. Skips directories
4. Extracts the file extension
5. Creates a folder based on extension
6. Moves the file into that folder
7. Logs progress messages

---

## Code Explanation

### Imports

```javascript
const os = require('os');
const fs = require('fs').promises;
const path = require('path');
```

* `os` module (exploration purpose)
* `fs.promises` for async file operations
* `path` for cross-platform path handling

---

### Main Function

```javascript
async function organizeFolder(folderName) {
    try {
        ...
    } catch (error) {
        console.error(`Error organizing files: ${error.message}`);
    }
}
```

* Uses async function
* Handles errors using try/catch

---

### Reading Directory

```javascript
const targetDir = path.join(__dirname, folderName);
const files = await fs.readdir(targetDir);
```

* Joins folder path safely
* Reads directory contents asynchronously

---

### Processing Files

```javascript
const stats = await fs.lstat(oldPath);
if (stats.isDirectory()) {
    continue;
}
```

* Skips folders
* Processes only files

---

### Extract Extension

```javascript
const ext = path.extname(file).slice(1) || 'others';
```

* Removes leading dot
* Files without extension go to `others/`

---

### Create Folder and Move File

```javascript
await fs.mkdir(categoryDir, { recursive: true });
await fs.rename(oldPath, newPath);
```

* `recursive: true` avoids errors if folder exists
* `rename()` moves file

---

## Example

### Before Organization

```
my_downloads/
├── f1.txt
├── f2.txt
├── f3.txt
├── f4.jpg
├── f5.jpg
├── f6.pdf
├── f7.pdf
├── test1/
└── test2/
```

---

### After Organization

```
my_downloads/
├── txt/
│   ├── f1.txt
│   ├── f2.txt
│   └── f3.txt
├── jpg/
│   ├── f4.jpg
│   └── f5.jpg
├── pdf/
│   ├── f6.pdf
│   └── f7.pdf
├── test1/
└── test2/
```

---

## Supported File Types

Works with ANY extension.

Examples:

| Extension    | Folder Created |
| ------------ | -------------- |
| .pdf         | pdf/           |
| .txt         | txt/           |
| .jpg         | jpg/           |
| .js          | js/            |
| .json        | json/          |
| No extension | others/        |

---

## Advantages

✓ Saves time
✓ Keeps folders clean
✓ Works for any file type
✓ Prevents clutter
✓ Fully asynchronous
✓ Safe file handling

---

## Common Use Cases

### 1. Organize Downloads Folder

```javascript
organizeFolder('Downloads');
```

### 2. Organize Project Assets

```javascript
organizeFolder('assets');
```

### 3. Clean Archive Folder

```javascript
organizeFolder('archive');
```

---

## File Structure

```
app2/
├── app.js
├── package.json
└── README.md
```

---

## package.json Details

```json
{
  "name": "app2",
  "version": "1.0.0",
  "type": "commonjs",
  "main": "app.js",
  "license": "ISC"
}
```

### Key Fields

* `"type": "commonjs"` → Uses require() syntax
* `"main": "app.js"` → Entry file
* No external dependencies

---

## Key Learning Points

1. Using fs.promises API
2. Async/Await pattern
3. Path handling with path.join()
4. Checking file type using lstat()
5. Creating directories programmatically
6. Moving files using rename()
7. Structured error handling

---

## Possible Enhancements

* Add input validation
* Add command-line arguments
* Add dry-run mode
* Add progress counter
* Add undo functionality
* Add date-based organization
* Add custom mapping rules
* Add logging to file

---

## Troubleshooting

| Issue             | Solution                                  |
| ----------------- | ----------------------------------------- |
| Folder not found  | Ensure folder exists in project directory |
| Permission denied | Check file/folder permissions             |
| Files not moving  | Ensure folderName is correct              |
| Module error      | Ensure Node.js is installed               |

---

## Testing

### Create Test Folder

```bash
mkdir my_downloads
cd my_downloads
type nul > file1.txt
type nul > file2.pdf
type nul > image.jpg
```

Then run:

```bash
node app.js
```

Verify files are sorted correctly.

---

## Performance Notes

* Efficient for large directories
* Non-blocking file operations
* Low memory usage
* Scalable for real-world usage

---

## Security Considerations

* Operates only inside specified directory
* Does not delete files
* Respects file permissions
* No external network access

---

## Real-World Applications

* Organizing Downloads folder
* Sorting media files
* Managing document repositories
* Cleaning up shared folders
* Structuring archive data

---

## Author

Mayukh Haldar

---

## License

ISC

---

## References

* Node.js fs.promises Documentation
* Node.js path Module
* Node.js OS Module Documentation