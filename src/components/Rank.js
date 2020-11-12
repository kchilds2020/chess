import React from 'react'
import styled from 'styled-components'

function Rank({starting, turn, position}) {
    return (
        starting % 2 === 0 ? 
        <Row style={{display: 'flex', flexDirection: turn === 'white' ? 'row' : 'row-reverse'}}>
            <TanSquare id={`a${starting}`}><Label>a{starting} {position.find(element => element.rank === `${starting}` && element.file === 'a').piece}</Label></TanSquare>
            <GreenSquare id={`b${starting}`}><Label>b{starting} {position.find(element => element.rank === `${starting}` && element.file === 'b').piece}</Label></GreenSquare>
            <TanSquare id={`c${starting}`}><Label>c{starting} {position.find(element => element.rank === `${starting}` && element.file === 'c').piece}</Label></TanSquare>
            <GreenSquare id={`d${starting}`}><Label>d{starting} {position.find(element => element.rank === `${starting}` && element.file === 'd').piece}</Label></GreenSquare>
            <TanSquare id={`e${starting}`}><Label>e{starting} {position.find(element => element.rank === `${starting}` && element.file === 'e').piece}</Label></TanSquare>
            <GreenSquare id={`f${starting}`}><Label>f{starting} {position.find(element => element.rank === `${starting}` && element.file === 'f').piece}</Label></GreenSquare>
            <TanSquare id={`g${starting}`}><Label>g{starting} {position.find(element => element.rank === `${starting}` && element.file === 'g').piece}</Label></TanSquare>
            <GreenSquare id={`h${starting}`}><Label>h{starting} {position.find(element => element.rank === `${starting}` && element.file === 'h').piece}</Label></GreenSquare>
        </Row>
        :
        <Row style={{display: 'flex', flexDirection: turn === 'white' ? 'row' : 'row-reverse'}}>
            <GreenSquare id={`a${starting}`}><Label>a{starting} {position.find(element => element.rank === `${starting}` && element.file === 'a').piece}</Label></GreenSquare>
            <TanSquare id={`b${starting}`}><Label>b{starting} {position.find(element => element.rank === `${starting}` && element.file === 'b').piece}</Label></TanSquare>
            <GreenSquare id={`c${starting}`}><Label>c{starting} {position.find(element => element.rank === `${starting}` && element.file === 'c').piece}</Label></GreenSquare>
            <TanSquare id={`d${starting}`}><Label>d{starting} {position.find(element => element.rank === `${starting}` && element.file === 'd').piece}</Label></TanSquare>
            <GreenSquare id={`e${starting}`}><Label>e{starting} {position.find(element => element.rank === `${starting}` && element.file === 'e').piece}</Label></GreenSquare>
            <TanSquare id={`f${starting}`}><Label>f{starting} {position.find(element => element.rank === `${starting}` && element.file === 'f').piece}</Label></TanSquare>
            <GreenSquare id={`g${starting}`}><Label>g{starting} {position.find(element => element.rank === `${starting}` && element.file === 'g').piece}</Label></GreenSquare>
            <TanSquare id={`h${starting}`}><Label>h{starting} {position.find(element => element.rank === `${starting}` && element.file === 'h').piece}</Label></TanSquare>
        </Row>

    )
}

const Row = styled.div`
    display: flex;
    width: 100%;
    height: 12.5%;
`
const TanSquare = styled.div`
position: relative;
    width: 100%;
    padding-top: 12.5%;
    background-color: tan;

`
const Label = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

const GreenSquare = styled.div`
position: relative;
    width: 100%;
    padding-top: 12.5%;
    background-color: green;
`


export default Rank
