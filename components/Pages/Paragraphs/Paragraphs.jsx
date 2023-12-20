import Pinfo from './Pinfo.js'

function abtMe() {
  return (
    <div>
      {Object.entries(Pinfo).map((item) => (
        <h1 className='paragraphs border-b-4 border-orange-400'>
        <div className='text-3xl pt-8'>
          {item[0] === 'Experience' ?
            <div className='text-right pr-9'>
              {item[0]}
            </div>
          :
            <div className='pl-9'>
              {item[0]}
            </div>
          }
        </div>
        <p className='m-8 text-xl'>{item[1]}</p>
      </h1>
      ))}
    </div>
  )
}
export default abtMe;
