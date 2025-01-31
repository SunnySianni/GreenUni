const db = require('../config/database');

exports.registerForCourse = async (req, res) => {
  const { studentId, courseId } = req.body;

  try {
    // Check if the student is already registered for the course
    const [existingRegistration] = await db.query(
      'SELECT * FROM StudentCourses WHERE student_id = ? AND course_id = ?',
      [studentId, courseId]
    );

    if (existingRegistration.length > 0) {
      return res.status(400).json({ message: 'Student is already registered for this course' });
    }

    // Register the student for the course
    await db.query(
      'INSERT INTO StudentCourses (student_id, course_id) VALUES (?, ?)',
      [studentId, courseId]
    );

    res.status(201).json({ message: 'Successfully registered for the course' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};