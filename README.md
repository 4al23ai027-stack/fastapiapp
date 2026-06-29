# Job Portal API

A complete FastAPI application for managing job listings and companies with PostgreSQL database integration.

## Features

- **Company Management**: Create, read, update, and delete companies
- **Job Management**: Create, read, update, and delete job postings
- **Database Integration**: PostgreSQL with SQLAlchemy ORM
- **CORS Support**: Cross-origin resource sharing enabled
- **API Documentation**: Automatic Swagger UI and ReDoc documentation
- **Data Validation**: Pydantic schemas for request/response validation

## Project Structure

```
fastapiapp/
├── app/
│   └── main.py              # FastAPI application entry point
├── models/
│   ├── company.py           # SQLAlchemy Company model
│   └── job.py               # SQLAlchemy Job model
├── schemas/
│   ├── company.py           # Pydantic schemas for Company
│   └── job.py               # Pydantic schemas for Job
├── routers/
│   ├── company.py           # Company API endpoints
│   └── job.py               # Job API endpoints
├── database.py              # Database configuration and session
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## Installation

### Prerequisites

- Python 3.8+
- PostgreSQL 12+

### Setup Steps

1. **Clone/Navigate to the project directory**:
   ```bash
   cd d:\megha_repos\fastapiapp
   ```

2. **Create and activate virtual environment**:
   ```bash
   # Windows
   python -m venv env
   env\Scripts\activate
   
   # macOS/Linux
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure PostgreSQL Database**:
   - Make sure PostgreSQL is running
   - Create a database named `student_db`:
   ```sql
   CREATE DATABASE student_db;
   ```
   - Update database credentials in `database.py` if needed:
   ```python
   SQLALCHEMY_DATABASE_URL = "postgresql://postgres:your_password@localhost:5432/student_db"
   ```

## Running the Application

```bash
uvicorn app.main:app --reload
```

The application will start at `http://localhost:8000`

## API Endpoints

### Company Endpoints

- **POST** `/company/` - Create a new company
  ```json
  {
    "name": "Tech Corp",
    "email": "info@techcorp.com",
    "phone": "+1-800-123-4567"
  }
  ```

- **GET** `/company/` - Get all companies

- **GET** `/company/{company_id}` - Get a specific company

- **PUT** `/company/{company_id}` - Update a company
  ```json
  {
    "name": "Updated Name",
    "email": "new@techcorp.com",
    "phone": "+1-800-987-6543"
  }
  ```

- **DELETE** `/company/{company_id}` - Delete a company

### Job Endpoints

- **POST** `/job/` - Create a new job posting
  ```json
  {
    "title": "Senior Developer",
    "salary": 120000,
    "description": "We are looking for a senior developer",
    "company_id": 1
  }
  ```

- **GET** `/job/` - Get all jobs

- **GET** `/job/{job_id}` - Get a specific job

- **PUT** `/job/{job_id}` - Update a job posting
  ```json
  {
    "title": "Lead Developer",
    "salary": 130000,
    "description": "Updated description",
    "company_id": 1
  }
  ```

- **DELETE** `/job/{job_id}` - Delete a job posting

- **GET** `/job/company/{company_id}` - Get all jobs for a specific company

### General Endpoints

- **GET** `/` - Welcome message with available endpoints
- **GET** `/about` - About the API
- **GET** `/contact` - Contact information

## API Documentation

Once the application is running, access:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Database Models

### Company Model

```python
class Company(Base):
    __tablename__ = 'companies'
    
    id: int (Primary Key)
    name: str (Required, Indexed)
    email: str (Unique)
    phone: str (Unique)
    jobs: Relationship to Job
```

### Job Model

```python
class Job(Base):
    __tablename__ = 'jobs'
    
    id: int (Primary Key)
    title: str (Required)
    description: str (Optional)
    salary: int
    company_id: int (Foreign Key to Company)
    company: Relationship to Company
```

## Response Schemas

### CompanyResponse
```json
{
  "id": 1,
  "name": "Tech Corp",
  "email": "info@techcorp.com",
  "phone": "+1-800-123-4567"
}
```

### JobResponse
```json
{
  "id": 1,
  "title": "Senior Developer",
  "salary": 120000,
  "description": "We are looking for a senior developer",
  "company_id": 1
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- **200** - Success
- **404** - Resource not found
- **422** - Validation error
- **500** - Server error

## Development

### Running Tests

To add tests, create a `tests/` directory and run:
```bash
pytest
```

### Code Style

The project uses standard Python conventions. To format code:
```bash
black app models schemas routers
```

## Dependencies

- **fastapi** - Modern web framework for building APIs
- **uvicorn** - ASGI server
- **sqlalchemy** - SQL toolkit and ORM
- **psycopg2** - PostgreSQL adapter for Python
- **pydantic** - Data validation library

## Common Issues

### PostgreSQL Connection Error
- Ensure PostgreSQL is running
- Check connection string in `database.py`
- Verify database and user credentials

### Module Not Found Error
- Activate the virtual environment
- Ensure all dependencies are installed with `pip install -r requirements.txt`

### Port Already in Use
- Run on a different port:
```bash
uvicorn app.main:app --reload --port 8001
```

## Future Enhancements

- User authentication and authorization
- Advanced search and filtering
- Job application tracking
- Email notifications
- Rate limiting
- Database migrations with Alembic

## License

MIT License

## Support

For issues or questions, please create an issue in the repository.