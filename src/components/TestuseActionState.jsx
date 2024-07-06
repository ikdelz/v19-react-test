import { useActionState, useOptimistic } from 'react'

const TestuseActionState = () => {

  const changeName = async(currentState, formData) => {
    setOptimisticName(formData.get('name'))
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const newName = formData.get("name");
      currentState.name = newName;
  
      return currentState
    } catch (error) {
      console.log(error)
    }
  };

  const [state, formAction, isPending] = useActionState(changeName, {
    name : 'elise'
  })

  const [optimisticName, setOptimisticName] = useOptimistic(state.name)

  return (
    <div>
      <h2>Test useActionState Hook</h2>
      <p>Current User: : {optimisticName}   {isPending && "loading..."}</p>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter name..." />
        <button>Update</button>
      </form>
    </div>
  );
}

export default TestuseActionState