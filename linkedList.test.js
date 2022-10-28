/* Import */
const LinkedList = require('./linkedList.js');

describe('Testing LinkedList class', () => {
  let list1;
  let list2;
  let list3;
  let list4;

  beforeEach(() => {
    list1 = new LinkedList([4, 2, 1, 3]);
    list2 = new LinkedList();
    list3 = new LinkedList([2, 7, 4, 9, 1]);
    list4 = new LinkedList([6, 'Y']);
  });

  it('addValueAtTail method', () => {
    expect(list2.addValueAtTail(10)).toEqual([10]);
    expect(list4.addValueAtTail('Z')).toEqual([6, 'Y', 'Z']);
  });

  it('addValueAtHead method', () => {
    expect(list1.addValueAtHead(0)).toEqual([0, 4, 2, 1, 3]);
    expect(list4.addValueAtHead('A')).toEqual(['A', 6, 'Y']);
  });

  it('addValueAtMiddle method', () => {
    expect(list1.addValueAtMiddle(5)).toEqual([4, 2, 5, 1, 3]);
    expect(list2.addValueAtMiddle(5)).toEqual([5]);
  });

  it('deleteHead method', () => {
    expect(list1.deleteHead()).toEqual([2, 1, 3]);
    expect(list4.deleteHead()).toEqual(['Y']);
  });

  it('deleteTail method', () => {
    expect(list1.deleteTail()).toEqual([4, 2, 1]);
    expect(list4.deleteTail()).toEqual([6]);
  });

  it('deleteMiddle method', () => {
    expect(list1.deleteMiddle()).toEqual([4, 2, 3]);
    expect(list3.deleteMiddle()).toEqual([2, 7, 9, 1]);
  });

  it('higherToLower method', () => {
    expect(list1.higherToLower()).toEqual([4, 3, 2, 1]);
    expect(list3.higherToLower()).toEqual([9, 7, 4, 2, 1]);

  });

  it('reverse method', () => {
    expect(list1.reverse()).toEqual([3, 1, 2, 4]);
    expect(list3.reverse()).toEqual([1, 9, 4, 7, 2]);
  });
});