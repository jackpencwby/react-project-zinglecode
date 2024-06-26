import { useEffect, useState } from 'react'
import './App.css'
import AppHeader from './Components/AppHeader'
import Item from './Components/Item'
import items from './data/items'
import Post from './Components/Post'
import AppSearch from './Components/AppSearch'

function App() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [searchText, setSearchText] = useState("");

	const onOpenItemClick = (item) => {
		setSelectedItem(item);
	}

	const onCloseItemClick = () => {
		setSelectedItem(null);
	}

	const filterItemsBySearchText = items.filter(item => item.name.includes(searchText));

	return (
		<div className='app'>
			<AppHeader />
			<div className='app-search-and-content'>
				<AppSearch value={searchText} setSearchText={setSearchText} />
				<div className='app-grid'>
					{filterItemsBySearchText.map((item, index) => <Item item={item} onOpenItemClick={onOpenItemClick} key={index} />)}
				</div>
			</div>
			{selectedItem && <Post item={selectedItem} onCloseItemClick={onCloseItemClick} />}
		</div>
	)
}

export default App

