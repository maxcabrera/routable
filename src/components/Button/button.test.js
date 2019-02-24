import Button from './'

describe('Button Component', () => {
  test('Snapshot test for Header', () => {
    const tree = renderer.create(<Button>Click me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})