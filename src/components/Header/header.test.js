import Header from './'

describe('Header section', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header title="Issues Management System" />)
  })

  test('Snapshot test for Header', () => {
    const tree = renderer.create(<Header title="Issues Management System" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})