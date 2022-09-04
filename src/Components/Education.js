import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    height: auto;
    width: 100%;
`
const Grid = styled.div`
    height: 100%;
    width: 100%;
`
const Item = styled.div`
    height: 100%;
    width: 100%;
`

const Array = [
    {
        name: 'Bts SIO',
        date: '2021 - 2022',
        institution: 'Lycée Nelson Mandela',
        location: 'Bras-Fusil, La Réunion',
        description: 'Spécialité SISR (Solutions d Infrastructure, Systèmes et Réseaux)'
    },
    {
        name: 'Bac STI2D',
        date: '2019 - 2021',
        institution: 'Lycée Amiral Bouvet',
        location: 'Saint-Benoît, La Réunion',
        description: 'Spécialité EE (Energie Environnement)'
    }
]

function Education() {
  return (
    <Container>
        <Grid>
            {Array.map((item, index) => (
                <Item key={index}>
                    <h4>{item.name}</h4>
                    <p>{item.date}</p>
                    <p>{item.institution}</p>
                    <p>{item.location}</p>
                    <p>{item.description}</p>
                </Item>
            ))}
        </Grid>
    </Container>
  )
}

export default Education