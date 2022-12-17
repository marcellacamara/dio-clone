import React from 'react'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
	return (<>
		<Header autenticado={true}/>
		<Container>
			<Column flex={3}>
				<Title>Feed</Title>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			</Column>
			<Column flex={1}>
				<TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
				<UserInfo percentual={80} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
				<UserInfo percentual={20} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
				<UserInfo percentual={50} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
				<UserInfo percentual={60} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
				<UserInfo percentual={90} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
				<UserInfo percentual={30} nome="Marcella Câmara" image="https://avatars.githubusercontent.com/u/102324373?s=400&u=39b3ab9ee2f63a2b2bf9bc63271831ea5bf347db&v=4" />
			</Column>
		</Container>
		</>)
}

export {Feed}