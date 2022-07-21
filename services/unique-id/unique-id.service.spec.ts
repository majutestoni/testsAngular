import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, () => {
  //artefato que queremos testar, pode ser apresentado entre '' ou .name

  //antes de executar os its, sempre um serivece novo
  let service: UniqueServiceId = null;
  beforeEach(() => {
    service = new UniqueServiceId();
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    //condição que queremos testar
    //padrão para o it
    const id = service.generateUniqueIdWithPrefix('app'); //passado app, porem pode ser qualquer um
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate id when called multiple times`, () => {
    const ids = new Set(); // não aceita elemento duplicados

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const empyValues = [null, undefined, '', '0', '1'];
    empyValues.forEach((empyValues) => {
      expect(() => service.generateUniqueIdWithPrefix(null))
        .withContext(`empy Values: ${empyValues}`)
        .toThrow();
    });
  });
});
