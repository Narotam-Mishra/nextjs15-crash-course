import { revalidatePath } from "next/cache";


type MockUser = {
    id: number;
    name: string;
  };
  
  export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const res = await fetch("https://677ce24b4496848554c80d49.mockapi.io/users");
    const users = await res.json();

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get("name");
        const userRes = await fetch("https://677ce24b4496848554c80d49.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
        const newUser = await userRes.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }

    return (
      <div className="py-10">
        <form action={addUser} className="mb-4">
            <input type="text" name="name" className="border p-2 mr-2" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add user</button>
        </form>
        <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className=" p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </div>
        ))}
      </div>
      </div>
    );
  }