import Pinfo from './Pinfo.js'

function abtMe() {
  return (
    <div>
      {Object.entries(Pinfo).map((item) => (
        <h1 className='paragraphs'>
        <p className={`text-3xl pt-8 ${item[0] === 'Experience' ? 'text-right pr-9': 'pl-9'}`}>{item[0]}</p>
        <p className='m-8 text-xl'>{item[1]}</p>
      </h1>
      ))}
    </div>
  )
}
export default abtMe;
