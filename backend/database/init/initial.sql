SELECT 'CREATE DATABASE kometo'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'kometo')\gexec
GRANT ALL PRIVILEGES ON DATABASE kometo TO postgres;