// function Scales({ scaleValue, type }) {
//     const range = [1, 2, 3]
    
//     let symbol;
//         switch (type) {
//             case 'intensite':
//                 symbol = '☕'
//                 break;
//             case 'note-clients':
//                 symbol = '⭐'
//                 break;
//             default:
//                 symbol = '•'
//         }

//     return (
//         <div>
//             {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{symbol}</span> : null
//             )}
//         </div>
//     )
// }

// export default Scales