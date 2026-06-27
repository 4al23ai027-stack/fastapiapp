from sqlalchemy import Column, Integer, String,Enum,relationship

from database import Base,engine,SessionLocal

class Company(Base):
    __tablename__ = 'companies'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,index=True, nullable=False)
    email = Column(String, unique=True)
    phone = Column(String, unique=True)

    jobs = relationship("Job", back_populates="company")

    def __repr__(self):
        return f"<Company(name={self.name}, industry={self.industry}, size={self.size}, location={self.location})>"

    @router .post("/")
    def create_    