public class LinkedList<T> {
  class Node<T> {
    public T value;
    public Node<T> next;

    Node(T value, Node next) {
      this.value = value;
      this.next = next;
    }

    public String toString() {
      return "Node:" + value.toString();
    }
  }

  Node<T> head;
  Node<T> last;

  public void append(T value) {
    var node = new Node<T>(value, null);
    if(head == null) {
      head = node;
      last = head;
    } else {
      last.next = new Node<T>(value, null);
      last = last.next;
    }
  }

  public void print() {
    var current = head;
    while(true) {
      System.out.println(current);
      if(current.next == null) break;
      current = current.next;
    }
  }

  public static void main(String[] argv) {
    
    // create linked list of 1,2,3,4
    var list = new LinkedList<Integer>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.print();

    // reverse the list
    if(list.head == null) return;
    
    var first = list.head;
    var middle = list.head.next;
    var last = middle == null ? null : middle.next;

    first.next = null;
    middle.next = first;
    
    while(middle != null) {
      first = middle;
      middle = last;
      
      if(middle != null) {
        last = middle.next;
        middle.next = first;
      }
    }

    list.head = first;

    list.print();
  }
}