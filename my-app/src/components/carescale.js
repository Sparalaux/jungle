
function typealert(scaleValue,careType){
    var type = careType === 'light' ? 'lumière' : 'd\'arrosage'
    var nbr = ''
    if(scaleValue === 1){
        nbr = 'peu'
    } else if(scaleValue === 2){
        nbr = 'modérément'
    } else if(scaleValue === 3){
        nbr = 'beaucoup'
    }
    alert(`cette plante a besoin de ${nbr} de ${type}`)
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => typealert(scaleValue,careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale