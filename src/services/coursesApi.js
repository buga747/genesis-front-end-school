import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiOGFjNWI2MS0xMjBkLTQyNzQtYjBiMS04MmE5Nzg4YTU1NTkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NDAwMzQsImV4cCI6MTY3OTY0MDAzNH0.kLN9TjggTgJEsbO4o-o9oYzF9yroZch6BoxOZS3VhEU';

export const getCourses = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const data = await axios.get(
      'https://api.wisey.app/api/v1/core/preview-courses',
      config
    );

    return data.data.courses;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching courses');
  }
};

export const getCourseById = async courseId => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const data = await axios.get(
      `https://api.wisey.app/api/v1/core/preview-courses/${courseId}`,
      config
    );

    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching courses');
  }
};
