const db = require('../config/database');

exports.getStudentData = async (req, res) => {
  const studentId = req.params.id;

  try {
    const [student] = await db.query('SELECT id, name, email, address, enrollment_status FROM Students WHERE id = ?', [studentId]);

    if (student.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};