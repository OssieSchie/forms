export async function methodGet(){
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

      return data;
}

export async function methodDelete(id){
  let headersList = {
    Accept: "application/json",
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbXZoeGhocHhqeWxzZG9tdm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE1MDksImV4cCI6MjAyNjMyNzUwOX0.I2LR0bG62kXNTWyOhEaALU7cOyHKgtmiwBfaO5cYxY0",
    Prefer: "return=representation",
  };

  let response = await fetch("https://aomvhxhhpxjylsdomvmt.supabase.co/rest/v1/recipes?id=eq." + id, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

export async function methodPatch( id, state = true){
  let headersList = {
    Accept: "application/json",
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbXZoeGhocHhqeWxzZG9tdm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE1MDksImV4cCI6MjAyNjMyNzUwOX0.I2LR0bG62kXNTWyOhEaALU7cOyHKgtmiwBfaO5cYxY0",
    Prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    studentFriendly: state,
  });

  let response = await fetch("https://aomvhxhhpxjylsdomvmt.supabase.co/rest/v1/recipes?id=eq." + id, {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

export async function methodSubmit(recipe){
  let headersList = {
    Accept: "application/json",
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbXZoeGhocHhqeWxzZG9tdm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE1MDksImV4cCI6MjAyNjMyNzUwOX0.I2LR0bG62kXNTWyOhEaALU7cOyHKgtmiwBfaO5cYxY0",
    Prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(recipe);

  let response = await fetch("https://aomvhxhhpxjylsdomvmt.supabase.co/rest/v1/recipes", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}