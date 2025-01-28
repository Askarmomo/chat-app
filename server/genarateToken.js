import jwt from 'jsonwebtoken';

export const generateToken = (res, id) => {
  try {
    // Generate the token
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true,         // Prevent client-side access to the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',     // Protect against CSRF attacks
      maxAge: 3600000,        // Cookie expiration time in milliseconds (1 hour)
    });

    return token; // Optionally return the token if needed elsewhere
  } catch (error) {
    console.error('Error generating token:', error.message);
    res.status(500).json({ message: 'Failed to generate token' });
  }
};
