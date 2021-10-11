package JUMO.project.Service;

import JUMO.project.Entity.Order;
import JUMO.project.Entity.User;

public interface OrderService {

    void buyingOrder(Long uid, String stockId, Integer count);
    void sellOrder(Long uid, String stockId, Integer count);
    Long getStockPrice(String stockId);
}
