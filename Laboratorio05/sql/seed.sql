DO $$
DECLARE
    admin_id UUID;

    gustavo_user_id UUID;
    geisel_user_id UUID;
    jesus_user_id UUID;

    gustavo_student_id UUID;
    geisel_student_id UUID;
    jesus_student_id UUID;

    curso_daw_id UUID;
    curso_eda_id UUID;
    curso_mn_id UUID;

BEGIN

    -- =========================================
    -- ADMINISTRADOR
    -- =========================================
    INSERT INTO users (names)
    VALUES ('Ysabel Milagros Rodriguez Choque')
    RETURNING id INTO admin_id;

    -- =========================================
    -- USERS
    -- =========================================
    INSERT INTO users (names)
    VALUES ('Gustavo Linares Aquino')
    RETURNING id INTO gustavo_user_id;

    INSERT INTO users (names)
    VALUES ('Geisel Reymar Pacheco Medina')
    RETURNING id INTO geisel_user_id;

    INSERT INTO users (names)
    VALUES ('Jesus Francisco Silva Pino')
    RETURNING id INTO jesus_user_id;

    -- =========================================
    -- STUDENTS
    -- =========================================
    INSERT INTO students (
        names,
        "fatherSurname",
        "motherSurname",
        gender,
        address,
        phone,
        note,
        user_id,
        created_id
    )
    VALUES (
        'Gustavo',
        'Linares',
        'Aquino',
        'Masculino',
        'Av. Independencia 123, Arequipa',
        '987654321',
        'Correo: glinares@unsa.edu.pe',
        gustavo_user_id,
        admin_id
    )
    RETURNING id INTO gustavo_student_id;

    INSERT INTO students (
        names,
        "fatherSurname",
        "motherSurname",
        gender,
        address,
        phone,
        note,
        user_id,
        created_id
    )
    VALUES (
        'Geisel Reymar',
        'Pacheco',
        'Medina',
        'Masculino',
        'Av. Venezuela 456, Arequipa',
        '912345678',
        'Correo: gpachecome@unsa.edu.pe',
        geisel_user_id,
        admin_id
    )
    RETURNING id INTO geisel_student_id;

    INSERT INTO students (
        names,
        "fatherSurname",
        "motherSurname",
        gender,
        address,
        phone,
        note,
        user_id,
        created_id
    )
    VALUES (
        'Jesus Francisco',
        'Silva',
        'Pino',
        'Masculino',
        'Distrito de Cayma, Arequipa',
        '998877665',
        'Correo: jsilva@unsa.edu.pe',
        jesus_user_id,
        admin_id
    )
    RETURNING id INTO jesus_student_id;

    -- =========================================
    -- COURSES
    -- =========================================
    INSERT INTO courses (
        name,
        description,
        created_id
    )
    VALUES (
        'Desarrollo de Aplicaciones Web',
        'Curso integrador de tecnologias web enfocado en frontend y backend',
        admin_id
    )
    RETURNING id INTO curso_daw_id;

    INSERT INTO courses (
        name,
        description,
        created_id
    )
    VALUES (
        'Estructura de Datos y Algoritmos',
        'Analisis, diseno y optimizacion de estructuras de datos',
        admin_id
    )
    RETURNING id INTO curso_eda_id;

    INSERT INTO courses (
        name,
        description,
        created_id
    )
    VALUES (
        'Metodos Numericos',
        'Resolucion de problemas matematicos mediante algoritmos',
        admin_id
    )
    RETURNING id INTO curso_mn_id;

    -- =========================================
    -- MATRICULAS
    -- =========================================
    INSERT INTO courses_students (
        course_id,
        student_id,
        created_id
    )
    VALUES
    (curso_daw_id, jesus_student_id, admin_id),
    (curso_daw_id, gustavo_student_id, admin_id),
    (curso_daw_id, geisel_student_id, admin_id),
    (curso_eda_id, jesus_student_id, admin_id),
    (curso_mn_id, gustavo_student_id, admin_id),
    (curso_mn_id, geisel_student_id, admin_id);

END $$;