import CivetComponent from '../components/CivetComponent.civet'

export default function TypeScript() {
  return (
    <>
      <CivetComponent />
      This is a TypeScript page.<br />
      This works.<br />
      It's better not to use it as a workouround, even though it works, because Civet components in TS files lose their type information and appear as a module that cannot be found.
    </>
  )
}
