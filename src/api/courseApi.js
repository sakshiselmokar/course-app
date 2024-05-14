export const yourApiCallToFetchEnrolledCourses = async () => {
  try {
    const response = await fetch('/api/enrolled-courses');
    
    if (!response.ok) {
      throw new Error('Failed to fetch enrolled courses');
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return await response.json(); // Parse JSON response
    } else {
      // Handle non-JSON response (e.g., text or HTML)
      const textResponse = await response.text();
      throw new Error(`Unexpected response type: ${contentType}. Response body: ${textResponse}`);
    }
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    throw error;
  }
};


const markCourseCompletedApi = async (courseId) => {
  try {
    // Simulated API call to mark course as completed
    const response = await fetch(`/api/courses/${courseId}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to mark course as completed');
    }

    // Return any response data needed (e.g., updated course details)
    return await response.json();
  } catch (error) {
    console.error('Error marking course as completed:', error);
    throw error;
  }
};

export { markCourseCompletedApi };
