SELECT 'CREATE DATABASE kometo'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'babybook')\gexec
GRANT ALL PRIVILEGES ON DATABASE kometo TO postgres;