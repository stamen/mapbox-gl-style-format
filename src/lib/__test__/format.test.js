import format from '../format';

describe('format', () => {
  test('works with properties in proper order', () => {
    const style = {
      version: 8,
      name: 'example style',
      layers: [
        {
          id: 'layer1',
          type: 'fill',
          source: 'example-source',
          "source-layer": 'example-source-layer',
        }
      ]
    };

    const expected = `{
  "version": 8,
  "name": "example style",
  "layers": [
    {
      "id": "layer1",
      "type": "fill",
      "source": "example-source",
      "source-layer": "example-source-layer"
    }
  ]
}`;

    const actual = format(style);
    expect(actual).toEqual(expected);
  });

  test('works with root properties not sorted', () => {
    const style = {
      name: 'example style',
      layers: [
        {
          id: 'layer1',
          type: 'fill',
          source: 'example-source',
          "source-layer": 'example-source-layer',
        }
      ],
      version: 8,
    };

    const expected = `{
  "version": 8,
  "name": "example style",
  "layers": [
    {
      "id": "layer1",
      "type": "fill",
      "source": "example-source",
      "source-layer": "example-source-layer"
    }
  ]
}`;

    const actual = format(style);
    expect(actual).toEqual(expected);
  });

  test('works with layer properties not sorted', () => {
    const style = {
      version: 8,
      name: 'example style',
      layers: [
        {
          source: 'example-source',
          type: 'fill',
          id: 'layer1',
          "source-layer": 'example-source-layer',
        }
      ]
    };

    const expected = `{
  "version": 8,
  "name": "example style",
  "layers": [
    {
      "id": "layer1",
      "type": "fill",
      "source": "example-source",
      "source-layer": "example-source-layer"
    }
  ]
}`;

    const actual = format(style);
    expect(actual).toEqual(expected);
  });

  test('works with layer.layout properties not sorted', () => {
    const style = {
      version: 8,
      name: 'example style',
      layers: [
        {
          source: 'example-source',
          type: 'line',
          id: 'layer1',
          "source-layer": 'example-source-layer',
          layout: {
            "line-miter-limit": 0,
            "line-round-limit": 0,
            "line-join": "round",
            "line-cap": "round"
          }
        }
      ]
    };

    const expected = `{
  "version": 8,
  "name": "example style",
  "layers": [
    {
      "id": "layer1",
      "type": "line",
      "source": "example-source",
      "source-layer": "example-source-layer",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-miter-limit": 0,
        "line-round-limit": 0
      }
    }
  ]
}`;

    const actual = format(style);
    expect(actual).toEqual(expected);
  });

  test('works with layer.paint properties not sorted', () => {
    const style = {
      version: 8,
      name: 'example style',
      layers: [
        {
          source: 'example-source',
          type: 'line',
          id: 'layer1',
          "source-layer": 'example-source-layer',
          paint: {
            "line-width": 5,
            "line-opacity": 0.5,
            "line-color": "red"
          }
        }
      ]
    };

    const expected = `{
  "version": 8,
  "name": "example style",
  "layers": [
    {
      "id": "layer1",
      "type": "line",
      "source": "example-source",
      "source-layer": "example-source-layer",
      "paint": {"line-color": "red", "line-opacity": 0.5, "line-width": 5}
    }
  ]
}`;

    const actual = format(style);
    expect(actual).toEqual(expected);
  });
});
