-- =========================================
-- ACTIVAR RLS
-- =========================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses_students ENABLE ROW LEVEL SECURITY;

-- =========================================
-- POLICIES SELECT
-- =========================================
CREATE POLICY "Permitir lectura publica users"
ON users
FOR SELECT
USING (true);

CREATE POLICY "Permitir lectura publica students"
ON students
FOR SELECT
USING (true);

CREATE POLICY "Permitir lectura publica courses"
ON courses
FOR SELECT
USING (true);

CREATE POLICY "Permitir lectura publica courses_students"
ON courses_students
FOR SELECT
USING (true);