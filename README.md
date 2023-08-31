# Back-End-E-Commerce-Mapping

##User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies


##Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

##Instructions

1. Access the repository's documentation and execute the command 'npm i', followed by updating the '.env' file.
2. To establish the database, employ the MySQL shell commands within the schema.sql file located in the 'db' folder. Utilize environment variables to securely store sensitive data, such as your MySQL username, password, and database name.
3. Initiate the seeding of the database with test data using the command 'npm run seed'. Subsequently, launch the server with either 'npm start' or 'nodemon' to synchronize the Sequelize models with the MySQL database.
4. For the development database, generate test data by employing the schema and seed commands.
5. Employ Insomnia to test the 'http://localhost:3001' URL, making use of various route endpoints including API GET, POST, PUT, and DELETE routes for categories, products, and tags. Ensure successful operations including creation, updating, and deletion of data in the database.