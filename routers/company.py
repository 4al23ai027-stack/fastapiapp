from fastapi import APIRouter
from schemas.company import CompanyCreate,CompanyUpdate


router = APIRouter(prefix="/company",tags=["company"])
company=[]

@router.post("/")
def create_company(company:CompanyCreate):
    company.append(company)
    return company
    

@router.get("/")
def get_all_company():
    return company



@router.get("/{company_id}")
def get_company(company_id: int):
    return company[company_id]