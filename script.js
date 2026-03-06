const supabaseUrl = "https://rjyutkewkohrttxklwil.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqeXV0a2V3a29ocnR0eGtsd2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NDcyODYsImV4cCI6MjA4ODEyMzI4Nn0.cYeKYo2n1JqNw6h9cV6oVt5hHE1QSY1qd3xjHEJBqYI"

const supa_base = supabase.createClient(supabaseUrl, supabaseKey)


async function loadMessages() {

  const { data, error } = await supa_base.from("contacts").select("*")

  const container = document.getElementById("messages")

  data.forEach(row => {

    const p = document.createElement("p")

    p.textContent = row.name + ": " + row.message

    container.appendChild(p)

  })

}

loadMessages()