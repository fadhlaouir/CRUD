# CRUD Superheroes with Angular 15 & .NET 6 🚀 Web API, EF Core & SQL Server

This is a web application that allows you to perform CRUD operations on a list of superheroes. The frontend of the application is built using Angular 15, while the backend is built using .NET 6 Web API with EF Core and SQL Server.

## Prerequisites

To run this application, you will need to have the following installed on your machine:

- .NET 6 SDK
- Node.js
- Sql server express
- Angular CLI

- Visual Studio
- visual Studio Code

You will also need a SQL Server instance or connection string to a remote SQL Server database.


## Getting Started

1 - Clone this repository or download the zip file and extract it.

2 - Open the command prompt or terminal and navigate to the Superheroes.WebApi folder.

3 - Run the following command to restore the dependencies:

```bash
dotnet restore
```

4 - Run the following command to start the API server:

```bash
dotnet run
```

5 - Open another command prompt or terminal and navigate to the Superheroes.WebApp folder.

6 - Run the following command to install the dependencies:

```bash
npm install 
```

7 - Run the following command to start the frontend server:

```bash
ng serve
```

8 - Open your browser and go to http://localhost:4200.

## Database Setup
By default, the application is configured to use a local SQL Server instance. You can modify the connection string in the `appsettings.json` file to use a remote SQL Server database.

1 - Open the `Superheroes.WebApi` project in Visual Studio or Visual Studio Code.

2 - Open the `appsettings.json` file.

3 - Modify the `DefaultConnection` connection string to use your SQL Server instance or remote database.

```bash
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=SuperheroesDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  ...
}
```

4 - Save the changes.

5 - Run the following command to apply the migrations:

```bash
dotnet ef database update
```

## Usage

You can use the web application to perform CRUD operations on the list of superheroes.

### List Superheroes
To list all the superheroes, go to the homepage. You will see a list of superheroes with their name, real name, and superhero name.

### Add Superhero
To add a new superhero, click on the `Add Superhero` button on the homepage. Fill in the details and click on the `Save` button.

### Edit Superhero
To edit a superhero, click on the `Edit` button next to the superhero you want to edit. Modify the details and click on the `Save` button.

### Delete Superhero
To delete a superhero, click on the `Delete` button next to the superhero you want to delete. Confirm the deletion and the superhero will be deleted.

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.
