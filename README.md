# nodejs-filesystem-operation

Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method: **require('fs')**;  
Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

#### The fs.readFile() method is used to read files on your computer.

#### Create Files:

The File System module has methods for creating new files:

1. fs.appendFile():  
   The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
2. fs.open():  
   The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
3. fs.writeFile():
   The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

#### Update Files:

the File System module has methods for updating files:

1. fs.appendFile() :  
   The fs.appendFile() method appends the specified content at the end of the specified file
2. fs.writeFile():  
   The fs.writeFile() method replaces the specified file and content

#### Delete Files

To delete a file with the File System module, use the fs.unlink() method

#### Rename Files;

To rename a file with the File System module, use the fs.rename() method

#### Upload Files

You can also use Node.js to upload files to your computer
There is a very good module for working with file uploads, called "Formidable".
