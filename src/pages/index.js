import React from 'react'
import { Redirect } from '@docusaurus/router'
import { useEffect, useState } from 'react'

export default function Home() {
	let [lang, setLang] = useState('en')
	useEffect(() => {
		setLang(document.documentElement.lang)
	})
	return <Redirect to={lang == 'zh-Hans' ? '/docs/zh-Hans/docs/overall/create' : '/docs/docs/overall/create'} />
}
