import axios from 'axios'

interface Project { id: string; name: string; owner: string }

async function render(): Promise<void> {
  const root = document.querySelector<HTMLElement>('#app')!
  const { data } = await axios.get<Project[]>('/api/projects')
  root.innerHTML = `<h1>Projects</h1><ul>${data.map((p) => `<li>${p.name} · ${p.owner}</li>`).join('')}</ul>`
}

void render()
