from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from .database import Base

class UserRole(str, enum.Enum):
    USER = "user"
    ADMIN = "admin"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(Enum(UserRole), default=UserRole.USER)
    newsletter_subscription = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    co2_calculations = relationship("CO2Calculation", back_populates="user")

class TransportType(str, enum.Enum):
    CAR = "car"
    BIKE = "bike"
    PUBLIC_TRANSPORT = "public_transport"
    CARPOOL = "carpool"

class CO2Calculation(Base):
    __tablename__ = "co2_calculations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    transport_type = Column(Enum(TransportType))
    distance = Column(Float)  # in kilometers
    co2_saved = Column(Float)  # in kilograms
    date = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="co2_calculations")
