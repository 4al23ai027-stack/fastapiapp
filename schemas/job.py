from pydantic import BaseModel
from typing import Optional

class JobCreate(BaseModel):
    title: str
    salary: int
    description: Optional[int] = None
    company_id: Optional[str] = None
    company_id: int = 
class JobUpdate(BaseModel):
    title:Optional[str] = None
    salary:Optional[int] = None