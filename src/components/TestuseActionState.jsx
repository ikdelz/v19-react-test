import { useActionState } from 'react'

const TestuseActionState = () => {

  const changeName = async(currentState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const newName = formData.get("name");
    currentState.name = newName;

    return currentState
  };

  const [state, formAction, isPending] = useActionState(changeName, {
    name : 'elise'
  })

  return (
    <div>
      <h2>Test useActionState Hook</h2>
      <p>Current User: {isPending ? 'loading...' : state.name}</p>
      <form action={formAction}>
        <input type="text" name='name' placeholder='Enter name...' />
        <button>Update</button>
      </form>
    </div>
  );
}

export default TestuseActionState