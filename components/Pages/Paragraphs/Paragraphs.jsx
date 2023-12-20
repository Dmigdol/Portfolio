import Pinfo from './Pinfo.js'

function abtMe() {
  return (
    <div>
      {Object.entries(Pinfo).map((item) => (
        <h1 className='paragraphs border-b-4 flex border-orange-400'>
        <div className='text-7xl pt-8 '>
          <div className='tricontainer'>
            {item[0] === 'Experience' ?
            <div>
              <div className='text-right w-1/3 h-max float-right border-2 pr-9'>
                {item[0]}
              </div>
              <p className='m-8 text-2xl w-2/4'>{item[1]}</p>
            </div>
            :
            <div>
              <div className='pl-9 border-2 w-1/4 float-left'>
                {item[0]}
              </div>
              <p className='m-8 text-2xl w-2/4 float-right'>{item[1]}</p>
            </div>
            }
          </div>
        </div>
      </h1>
      ))}
    </div>
  )
}
export default abtMe;
