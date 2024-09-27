# importando
try:
    from sqlalchemy import Column, DateTime, Integer, Text, create_engine
    from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base
    from datetime import datetime
except ModuleNotFoundError as erro: 
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

engine = create_engine('sqlite:////tmp/test.db')
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    from app.models.user import User
    Base.metadata.create_all(bind=engine)