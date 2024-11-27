import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  
  // Extract query parameters
  const gender = searchParams.get('gender');
  const city = searchParams.get('city');
  const country = searchParams.get('country');
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 10;
  const fields = searchParams.get('fields');

  // Build parameters for the external API request
  const params = {
    results: limit,
    gender,
    nat: country,
    page,
  };

  try {
    // Make the external API request
    const response = await axios.get('https://randomuser.me/api/', { params });
    let users = response.data.results;

    // Apply city filter if specified
    if (city) {
      users = users.filter(user => user.location.city.toLowerCase() === city.toLowerCase());
    }

    // Apply field selection if specified
    if (fields) {
      const fieldsArray = fields.split(',');
      users = users.map(user => {
        const selectedFields = {};
        fieldsArray.forEach(field => {
          if (field in user) {
            selectedFields[field] = user[field];
          } else if (field in user.name) {
            selectedFields.name = `${user.name.first} ${user.name.last}`;
          } else if (field in user.location) {
            selectedFields[field] = user.location[field];
          }
        });
        return selectedFields;
      });
    }

    // Return the processed user data as a JSON response
    return new Response(JSON.stringify({
      users,
      page,
      limit,
      total: response.data.info.results,
    }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
