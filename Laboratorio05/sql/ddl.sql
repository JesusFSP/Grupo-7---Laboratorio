-- =========================================
-- EXTENSION PARA UUID
-- =========================================
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =========================================
-- TABLA: users
-- =========================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    names VARCHAR(100) NOT NULL,

    status VARCHAR(20) DEFAULT 'ACTIVE',

    created TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    created_id UUID REFERENCES users(id),
    modified_id UUID REFERENCES users(id)
);

-- =========================================
-- TABLA: students
-- =========================================
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    names VARCHAR(100) NOT NULL,
    "fatherSurname" VARCHAR(100),
    "motherSurname" VARCHAR(100),

    gender VARCHAR(20),
    address TEXT,
    phone VARCHAR(20),
    note TEXT,

    user_id UUID REFERENCES users(id),

    status VARCHAR(20) DEFAULT 'ACTIVE',

    created TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    created_id UUID REFERENCES users(id),
    modified_id UUID REFERENCES users(id)
);

-- =========================================
-- TABLA: courses
-- =========================================
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL,
    description TEXT,

    status VARCHAR(20) DEFAULT 'ACTIVE',

    created TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    created_id UUID REFERENCES users(id),
    modified_id UUID REFERENCES users(id)
);

-- =========================================
-- TABLA INTERMEDIA: courses_students
-- =========================================
CREATE TABLE courses_students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,

    status VARCHAR(20) DEFAULT 'ACTIVE',

    created TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    created_id UUID REFERENCES users(id),
    modified_id UUID REFERENCES users(id),

    UNIQUE(course_id, student_id)
);