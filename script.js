let headersList = {
  Accept: "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbXZoeGhocHhqeWxzZG9tdm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE1MDksImV4cCI6MjAyNjMyNzUwOX0.I2LR0bG62kXNTWyOhEaALU7cOyHKgtmiwBfaO5cYxY0",
};

let response = await fetch(
  "https://aomvhxhhpxjylsdomvmt.supabase.co/rest/v1/recipes",
  {
    method: "GET",
    headers: headersList,
  }
);

let data = await response.json();
console.table(data);
