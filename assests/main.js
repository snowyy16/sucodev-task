let todos = [
  {
    id: 1,
    type: 'todo',
    category: '123',
    title: 'This is title',
    content: 'This is content',
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: 2,
    type: 'todo',
    category: 'codeing',
    title: 'This is title 2',
    content: 'This is content 2',
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: 3,
    type: 'doing',
    category: 'codeing',
    title: 'This is title 3',
    content: 'This is content 3',
    createdAt: new Date().toLocaleDateString()
  },
]


const todoColumn = document.getElementById('todo')
const doingColumn = document.getElementById('doing')
const todoCountElement = document.getElementById('todo-count')

function deleteItem(id) {
  // remove item from array
  
  // find item - find index(vi tri)
  // const index = todos.find((item) => item.id === id)
  const index = todos.findIndex((item) => {
    if (item.id === id) {
      return true
    }
  })

  console.log(index)
  todos.splice(index, 1)

  render()
}
function createListElement(arr) {
  const result = arr.map((item) => {
    return 
    //    <!-- item -->
           <div class="border-2 border-gray-400 rounded-xl mt-2 p-2">

            <div class="flex justify-between">
              <p>${item.category}</p>
              <div onclick="deleteItem(${item.id})">
                {/* <!-- icon --> */}
                
              </div>
            </div>

            <p class="text-lg font-semibold">
            ${item.title}
            </p>

            {/* <!-- divider --> */}
             <div class="border-b-2 border-b-gray-300 mt-3"></div>

             {/* <!-- content --> */}
              <p>
                ${item.content}
              </p>
             {/* <!-- ceated at --> */}
              <div>
                ${item.createdAt}
              </div>
           </div>
    
  })

  return result
}
function render() {
  const todoItems = todos.filter((item) => item.type === 'todo')
  const doingItems = todos.filter((item) => item.type === 'doing')
  // return element use template string
  const todoItemElements = createListElement(todoItems)
  todoCountElement.innerText = todoItemElements.length

  const doingItemElements = createListElement(doingItems)

  // console.log('todoItemElements', todoItemElements.join(''))
  todoColumn.innerHTML =  todoItemElements.join('')

  doingColumn.innerHTML = doingItemElements.join('')
}

render()