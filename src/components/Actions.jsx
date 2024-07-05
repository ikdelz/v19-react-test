import { useFormStatus } from 'react-dom'

const Button = () => {
  const { pending } = useFormStatus()

  return(
    <button disabled={pending}>{pending ? 'adding...' : 'add'}</button>
  )
}

const Actions = () => {

  const formAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const user = {
      email : formData.get('email'),
      password : formData.get('password')
    }
    alert(user.email + ' has password ' + user.password)
  }

  return (
    <div>
      <form action={formAction}>
        <input type="text" name='email' placeholder='Email...' />
        <input type="text" name='password' placeholder='Password...' />
        <Button />
      </form>
    </div>
  )
}

export default Actions