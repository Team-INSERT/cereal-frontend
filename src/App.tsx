import * as R from 'allFiles'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<R.Home />} />
					<Route path="/chat" element={<R.Chat />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
