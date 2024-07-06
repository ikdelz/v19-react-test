import { version, Suspense, createContext } from 'react'
import TestUse from './components/TestUse'
import Actions from './components/Actions';
import TestuseActionState from './components/TestuseActionState';

export const userContext = createContext()

function App() {
  return (
    <div>
      <userContext.Provider value={'elise'}>
        <h2>Testing te use hook</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <TestUse />
        </Suspense>
      </userContext.Provider>
      <h2>Actions with useFromStatus</h2>
      <Actions />
      <TestuseActionState />
    </div>
  );
}

export default App
