import BreadCrumbs from './'

describe('Breadcrumbs', () => {

  let wrapper
  let paths = [
    { title: 'Repos'},
    { title: 'This is the repo #1'}
  ]

  beforeEach(() => {
    wrapper = shallow(<BreadCrumbs paths={paths}/>)
  })

  test('Renders Correct routes', () => {
    expect(wrapper.find('span').length).toEqual(2)
  })
})